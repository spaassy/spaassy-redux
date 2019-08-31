import HocConnect from './hocConnect'

const projectType = process.env.PROJECTTYPE

let newConnect = HocConnect

if (projectType == 'SPAASSY' && window.subProject) {
    newConnect = window.subProject.SpaAssyConnect
}

export default newConnect