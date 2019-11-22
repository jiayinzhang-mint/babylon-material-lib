
import { Scene } from '@babylonjs/core/scene';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR';
import { Color3 } from '@babylonjs/core/Maths'
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture';
import { float } from '@babylonjs/core/types';


const glass = (scene: Scene, hdrTexture: CubeTexture, options: {
  name: string,
  ior?: float,
  alpha?: float,
  microSurface?: float,
  reflectivityColor?: Color3,
  albedoColor?: Color3
}) => {
  const glass = new PBRMaterial(name, scene);
  glass.reflectionTexture = hdrTexture;
  glass.refractionTexture = hdrTexture;
  glass.linkRefractionWithTransparency = true;
  glass.indexOfRefraction = options.ior
  glass.alpha = options.alpha
  glass.microSurface = options.microSurface
  glass.reflectivityColor = options.reflectivityColor
  glass.albedoColor = options.albedoColor
  return glass
}

const metal = (scene: Scene, hdrTexture: CubeTexture, options: {
  name: string,
  microSurface?: float,
  reflectivityColor?: Color3,
  albedoColor?: Color3
}) => {
  const metal = new PBRMaterial(name, scene);
  metal.reflectionTexture = hdrTexture;
  metal.microSurface = options.microSurface
  metal.reflectivityColor = options.reflectivityColor
  metal.albedoColor = options.albedoColor
  return metal
}

const plastic = (scene: Scene, hdrTexture: CubeTexture, options: {
  name: string,
  microSurface?: float,
  reflectivityColor?: Color3,
  albedoColor?: Color3
}) => {
  const plastic = new PBRMaterial(name, scene);
  plastic.reflectionTexture = hdrTexture;
  plastic.microSurface = options.microSurface
  plastic.albedoColor = options.reflectivityColor
  plastic.reflectivityColor = options.albedoColor
  return plastic
}

export {
  glass, metal, plastic
}