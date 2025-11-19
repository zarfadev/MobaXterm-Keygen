/**
 * Utility to merge MobaXterm key file with custom settings file
 */

/**
 * Merges a custom settings file with the license file
 * @param {Blob} licenseFile - The Custom.mxtpro license file (which is a ZIP containing Pro.key)
 * @param {Blob} customSettingsFile - The MobaXterm customization.custom file (which is a ZIP with settings)
 * @returns {Promise<Blob>} - A promise that resolves to the merged ZIP file
 */
function mergeZipFiles(licenseFile, customSettingsFile) {
  return new Promise((resolve, reject) => {
    // Create a new JSZip instance for the merged result
    const mergedZip = new JSZip();
    const licenseZip = new JSZip();
    const settingsZip = new JSZip();
    
    // First load the license file
    licenseZip.loadAsync(licenseFile)
      .then((licenseContents) => {
        // Then load the custom settings file
        return settingsZip.loadAsync(customSettingsFile)
          .then((settingsContents) => {
            // Get the Pro.key file from license ZIP
            return licenseContents.file("Pro.key").async("string")
              .then((proKeyContent) => {
                // Add the Pro.key to the merged zip
                mergedZip.file("Pro.key", proKeyContent);
                
                // Add all files from the custom settings ZIP
                const promises = [];
                settingsContents.forEach((relativePath, file) => {
                  if (!file.dir) {
                    const promise = file.async("blob").then((content) => {
                      mergedZip.file(relativePath, content);
                    });
                    promises.push(promise);
                  }
                });
                
                return Promise.all(promises).then(() => {
                  // Generate the final merged ZIP file
                  return mergedZip.generateAsync({type: "blob"});
                });
              });
          });
      })
      .then((mergedContent) => {
        resolve(mergedContent);
      })
      .catch((error) => {
        console.error("Error merging ZIP files:", error);
        reject(error);
      });
  });
}

export { mergeZipFiles };
