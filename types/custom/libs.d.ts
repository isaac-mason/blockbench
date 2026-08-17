import * as three from 'three'

declare global {
	// @types/three (>=0.170) no longer ships the UMD `export as namespace THREE`.
	// Blockbench uses `THREE` as a global namespace and value throughout, so re-expose it.
	export import THREE = three
}

declare module 'three' {
	interface Object3D {
		/**The outline mesh of the mesh */
		outline?: three.Object3D | three.Mesh
		fix_rotation?: three.Euler
		fix_position?: three.Vector3
		no_export?: boolean
		isElement?: boolean
		isGroup?: boolean
	}
}
