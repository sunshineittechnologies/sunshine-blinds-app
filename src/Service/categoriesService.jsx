
const API_BASE = "http://localhost:7500/api/categories";

  export async function getCategories() {

    const res = await fetch(`${API_BASE}`, {
        method: "GET",
        headers: {
        'Content-Type': 'application/json',
      },
    });

    let data = {};
    const text = await res.text().catch(() => "");
    try {
        data = text ? JSON.parse(text) : {};
    } catch {
        data = {};
    }

    const success = (data?.success);
    const categories = data.data;
    return {
        ok: res.ok,
        success,
        categories
    };
}

  export async function createCategory(categoryData) {

    const res = await fetch(`${API_BASE}`, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryData),
    });

    let data = {};
    const text = await res.text().catch(() => "");
    try {
        data = text ? JSON.parse(text) : {};
    } catch {
        data = {};
    }

    const success = (data?.success);
    const category = data.data;
    return {
        ok: res.ok,
        success,
        category
    };
}

export async function uploadCategoryImages(imageFiles, presignedUrl) {
  let uploadStatus = [];
  for(const file of imageFiles) {
    try {
      const response = await fetch(presignedUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': file.type,
        },
        body: file,
      });

      if (!response.ok) {
        uploadStatus.push(false);
      } else {
        uploadStatus.push(true);
      }
    } catch (error) {
      console.error('Error uploading to pre-signed URL:', error);
      uploadStatus.push(false);
    }
  }
  return uploadStatus;
}

  export default {
    getCategories,
    createCategory,
    uploadCategoryImages
  };