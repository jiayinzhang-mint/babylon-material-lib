
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
  glass.indexOfRefraction = options.ior ? options.ior : 0.52;
  glass.alpha = options.alpha ? options.alpha : 0;
  glass.microSurface = options.microSurface ? options.microSurface : 1;
  glass.reflectivityColor = options.reflectivityColor ? options.reflectivityColor : new Color3(0.2, 0.2, 0.2);
  glass.albedoColor = options.albedoColor ? options.albedoColor : new Color3(0.85, 0.85, 0.85);
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
  metal.microSurface = options.microSurface ? options.microSurface : 0.96;
  metal.reflectivityColor = options.reflectivityColor ? options.reflectivityColor : new Color3(0.85, 0.85, 0.85);
  metal.albedoColor = options.albedoColor ? options.albedoColor : new Color3(0.01, 0.01, 0.01);
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
  plastic.microSurface = options.microSurface ? options.microSurface : 0.96;
  plastic.albedoColor = options.reflectivityColor ? options.reflectivityColor : new Color3(0.206, 0.94, 1);
  plastic.reflectivityColor = options.albedoColor ? options.albedoColor : new Color3(0.003, 0.003, 0.003);
  return plastic
}

export {
  glass, metal, plastic
}