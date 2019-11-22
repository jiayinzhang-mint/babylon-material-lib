
import { Scene } from '@babylonjs/core/scene';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR';
import { Color3 } from '@babylonjs/core/Maths'
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture';


const glass = (scene: Scene, hdrTexture: CubeTexture) => {
  const glass = new PBRMaterial('glass', scene);
  glass.reflectionTexture = hdrTexture;
  glass.refractionTexture = hdrTexture;
  glass.linkRefractionWithTransparency = true;
  glass.indexOfRefraction = 0.52;
  glass.alpha = 0;
  glass.microSurface = 1;
  glass.reflectivityColor = new Color3(0.2, 0.2, 0.2);
  glass.albedoColor = new Color3(0.85, 0.85, 0.85);
  return glass
}

const metal = (scene: Scene, hdrTexture: CubeTexture) => {
  const metal = new PBRMaterial('metal', scene);
  metal.reflectionTexture = hdrTexture;
  metal.microSurface = 0.96;
  metal.reflectivityColor = new Color3(0.85, 0.85, 0.85);
  metal.albedoColor = new Color3(0.01, 0.01, 0.01);
  return metal
}

const plastic = (scene: Scene, hdrTexture: CubeTexture) => {
  const plastic = new PBRMaterial('plastic', scene);
  plastic.reflectionTexture = hdrTexture;
  plastic.microSurface = 0.96;
  plastic.albedoColor = new Color3(0.206, 0.94, 1);
  plastic.reflectivityColor = new Color3(0.003, 0.003, 0.003);
  return plastic
}

export {
  glass, metal, plastic
}