import * as GIFEnc from 'gifenc'
import $ from 'jquery'
import * as threejs from "three"
import * as FIK from './fik'
import Vue from 'vue/dist/vue.js'
import JSZip from 'jszip'
import Prism from 'prismjs'
import 'prismjs/components/prism-json'
import GIF from './gif'
import vSortable from 'vue-sortable'
import Sortable from 'sortablejs'
import {marked} from 'marked'
import { APNGencoder } from './canvas2apng'
import DOMPurify from 'dompurify'

Vue.use(vSortable)
Vue.directive('sortable', {
    inserted: function (el, binding) {
        new Sortable(el, binding.value || {})
    }
})

const THREE = Object.assign({}, threejs);

// Blockbench manages its own colors and outputs literal texture/color values through
// custom shaders, matching the unmanaged (LinearEncoding) pipeline it relied on before
// three r152. Disable automatic color management to preserve that appearance.
THREE.ColorManagement.enabled = false;

export {
    GIFEnc,
    GIF,
    THREE,
    $,
    $ as jQuery,
    FIK,
    Vue,
    JSZip,
    Prism,
    marked,
    APNGencoder,
    DOMPurify,
}
const global = {
    GIFEnc,
    THREE,
    jQuery: $,
    $,
    FIK,
    Vue,
    JSZip,
    Prism,
    marked,
    APNGencoder,
    DOMPurify,
}
Object.assign(window, global);
