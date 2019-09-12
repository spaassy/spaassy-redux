### spaassy-redux 是spaassy的核心依赖。基于react-redux并对其进行了改写。

#### spaassy-redux对外暴露以下API：

* AsyncComponent

AsyncComponent是一个函数，这个函数会接受一个字符串参数，然后返回一个异步加载组件。主要是用于spaassy项目中react组件懒加载。

返回的懒加载组件外层会有一个以参数命名className的div，之所以这么做，是为了方便开发者对组件样式做隔离，防止样式污染。你也可以不传参数，这样返回出来的组件就没有外层div。

示例：

``` javaScript
import {
    AsyncComponent
} from 'spaassy-redux'

let AsyncComp = AsyncComponent('home')

const routers = [{
        path: '/',
        exact: true,
        component: AsyncComp(() => import('@views/home/demoOne'))
    },
    {
        path: '/demoTwo',
        component: AsyncComp(() => import('@views/home/demoTwo'))
    }
]

export default routers
```

* SpaAssyProvider

SpaAssyProvider 的作用是替代react-redux 的Provider 组件。spaassy-redux内部改写了bindActionCreators、combineReducers、createReducer、promiseMiddleware，并集成到了SpaassyProvider 组件当中。所以你不需要另外再配置和执行以上四个函数。

SpaAssyProvider 有以下几个参数：

参数           |   说明  |   类型   |   默认值
--------------|---------|----------|---------
 rootReducers | 创建的reducer函数集合 | Function[] | -
 namespace | redux命名空间，用来隔离store内部的数据 | String | -
 mainProject | 用来定义当前的工程是portal,区别于子系统 | boolean | -


示例：

``` javaScript
import React from 'react';
import ReactDom from 'react-dom';
import App from '@views/app';
import { SpaAssyProvider } from 'spaassy-redux'
import 'lodash'
import './common';

import rootReducers from '@store'

const appEle = document.getElementById('app');
const namespace = process.env.SYSTEMNAME

ReactDom.render(
    <SpaAssyProvider
        rootReducers={rootReducers}
        namespace={namespace}
        mainProject
    >
        <App />
    </SpaAssyProvider>,
    appEle
);

if (module.hot) {
    console.log('启用热加载更新！')
    module.hot.accept();
}
```

* SpaAssyConnect

SpaAssyConnect 是一个函数，接受一个字符串类型参数，返回一个装饰器函数。
返回的装饰器函数用来绑定组件与store中的数据。

示例：

``` javaScript
import React from 'react';
import { SpaAssyConnect } from 'spaassy-redux'
import { setTest } from '@store/test/test_action'

import './index.less'

const namespace = process.env.SYSTEMNAME

@SpaAssyConnect(namespace)(state => ({ store: state }), { setTest: setTest })
class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="homeContent">{this.props.store.testReducer.str}
            </div>
        )
    }
}

export default Home;
```

示例中，执行
``` javaScript
const namespace = process.env.SYSTEMNAME
SpaAssyConnect(namespace)
```

返回的是一个装饰器函数，这个函数内部接收两个参数：

参数           |   说明  |   类型   |   默认值 
--------------|---------|----------|--------------------
 mapStateToProps | 映射store中的值到当前组件props,参数类型为function 和数组，为function的时候 有一个默认参数state，该function 返回一个新的对象。当参数为数组的时候，数组内容就是store数据里的key，会映射到当前组件的props中 | Funcionth or String[] | - 
 mapDispatchToProps | 映射action方法到当前组件props | Object | -

SpaAssyProvider 中为了系统store 数据隔离使用了nameSpace， 它会在初始化数据的时候为每一个系统生成一个命名空间。所以当你用SpaAssyConnect 绑定数据的时候也需要传入一个nameSpace 来指明你是要哪个命名空间内的数据。nameSpace 可以指明一个，也可以传递多个，这样在微前端应用中一个子系统可以获取其它子系统或是portal系统中的数据。但是，nameSpace 参数为多个的情况下，第一个nameSpace 必须是本系统的nameSpace，因为dispatch 是以第一个nameSpace 去触发aciton的， 本系统只能修改store 内部本系统的数据。

* SpaAssyRegister

SpaAssyRegister 是一个class类，提供子系统将路由组件和reducer注入到portal系统的方法。也给portal系统提供获取子系统路由和reducer的方法：

子系统路由、reducer注册示例：
``` javaScript
import {
    SpaAssyRegister
} from 'spaassy-redux'
import reducers from '@store'
import routers from '@/views/rootRouters'

// example:
const namespace = process.env.SYSTEMNAME

let option = {
    namespace: namespace,
    routers: [...routers],
    reducers: {
        ...reducers
    }
}
const spaassyRegister = new SpaAssyRegister(option)

spaassyRegister.addRouters()
spaassyRegister.registerReducer()
```

portal系统获取子系统路由示例：

``` javaScript
import { AsyncComponent } from 'spaassy-redux'
import rootRouters from '@views/rootRouters'
import {
    SpaAssyRegister
} from 'spaassy-redux'

const spaassyRegister = new SpaAssyRegister()

const subRouters = spaassyRegister.getRouters()
let subRouterList = []
Object.keys(subRouters).map(o => {
    subRouterList.push(...subRouters[o])
})

const routers = [
    // ...rootRouters,
    ...subRouterList
]

export default routers
```

spaassyRegister 类的方法：

方法           | 说明    |   参数   |   返回值   |   
--------------|---------|----------|---------
 addRouters | 往portal系统中注册routers的方法 | Router[] | -
 registerReducer | 往portal系统中注册reducers的方法  | Reducer[] | -
 getRouters | 主系统portal用来获取子系统router的方法，参数为子系统注册路由的nameSpace，如果不穿参数，则获取全部子系统路由 | String or null | -
 getReducers | 主系统portal用来获取子系统reducer的方法，参数为子系统注册路由的nameSpace，如果不穿参数，则获取全部子系统reducer | String or null | -
