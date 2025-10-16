
const API_BASE = "http://localhost:7500/api/categories";

  export async function getCategories() {

    const res = await fetch(`${API_BASE}`, {
        method: "GET",
    });

    let data = {};
    const text = await res.text().catch(() => "");
    try {
        data = text ? JSON.parse(text) : {};
    } catch {
        data = {};
    }

    console.log(data);

    const success = (data?.success);
    const categories = data.data;
    return {
        ok: res.ok,
        success,
        categories
    };
}

  export default {
    getCategories
  };