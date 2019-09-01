import HocConnect from './hocConnect'

let newConnect = HocConnect

if (window.subProject) {
    newConnect = window.subProject.SpaAssyConnect
}

export default newConnect