import { readFileSync, writeFileSync } from "fs";

const targetVersion = process.env.npm_package_version;

function updateVersion() {
  const manifest = JSON.parse(readFileSync("manifest.json", "utf8"));
  const { minAppVersion } = manifest;
  manifest.version = targetVersion;
  writeFileSync("manifest.json", JSON.stringify(manifest, null, "  "));

  // update versions.json with target version and minAppVersion from manifest.json
  let versions = JSON.parse(readFileSync("versions.json", "utf8"));
  versions[targetVersion] = minAppVersion;
  writeFileSync("versions.json", JSON.stringify(versions, null, "  "));
}

updateVersion();
