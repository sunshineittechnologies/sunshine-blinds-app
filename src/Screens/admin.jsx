import React, { useEffect, useState } from 'react';
import { getCategories, createCategory, uploadCategoryImages } from '../Service/categoriesService';

const AdminDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [categoryForm, setCategoryForm] = useState({
    name: '',
    subtext: '',
    description: '',
    images: []
  });

  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    price: '',
    images: [],
    category: '',
    newCategory: {
      name: '',
      description: '',
      images: []
    }
  });

  const [showNewCategorySection, setShowNewCategorySection] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await getCategories();
        if (result.ok && result.success) {
          setCategories(result.categories || []);
        } else {
          setError("Failed to load categories");
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  // Category Form Handlers
  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setCategoryForm({ ...categoryForm, [name]: value });
  };

  const handleCategoryImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setCategoryForm({ ...categoryForm, images: [...categoryForm.images, ...imageUrls] });
  };

  const removeCategoryImage = (index) => {
    const newImages = categoryForm.images.filter((_, i) => i !== index);
    setCategoryForm({ ...categoryForm, images: newImages });
  };

  const handleCategorySubmit = async () => {
    if (!categoryForm.name || !categoryForm.description || !categoryForm.subtext) {
      alert('Please fill in all required fields');
      return;
    }
    const newCategory = {
      categoryName: categoryForm.name,
      categorySubText: categoryForm.subtext,
      categoryDescription: categoryForm.description,
    };
    setCategories([...categories, newCategory]);
    try {
      const result = await createCategory(newCategory);
      if(result.ok && result.success) {
        const savedCategory = result.category;
        if(categoryForm.images.length > 0 && savedCategory.presignedUrl != null && savedCategory.imageUploadStatus === 'pending') {
          const uploadResult = await uploadCategoryImages(categoryForm.images, savedCategory.presignedUrl);
          if(uploadResult.length != categoryForm.images.length)
            alert('Something went wrong while uploading images.');
          else {
            if(uploadResult.includes(false))
              alert('Not all images saved successfully.');
            else
              alert('Images saved successfully.');

            
          }
        }
        alert(`Category "${savedCategory.categoryName}" added successfully!`);
      }
    } catch (err) {
        console.error("Error creating category:", err);
        setError("An unexpected error occurred");
    }
    setCategoryForm({ name: '', subtext: '', description: '', images: [] });
  };

  // Product Form Handlers
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProductForm({ ...productForm, [name]: value });
    
    if (name === 'category' && value === 'new') {
      setShowNewCategorySection(true);
    } else if (name === 'category') {
      setShowNewCategorySection(false);
    }
  };

  const handleProductImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setProductForm({ ...productForm, images: [...productForm.images, ...imageUrls] });
  };

  const removeProductImage = (index) => {
    const newImages = productForm.images.filter((_, i) => i !== index);
    setProductForm({ ...productForm, images: newImages });
  };

  const handleNewCategoryChange = (e) => {
    const { name, value } = e.target;
    setProductForm({
      ...productForm,
      newCategory: { ...productForm.newCategory, [name]: value }
    });
  };

  const handleNewCategoryImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setProductForm({
      ...productForm,
      newCategory: {
        ...productForm.newCategory,
        images: [...productForm.newCategory.images, ...imageUrls]
      }
    });
  };

  const removeNewCategoryImage = (index) => {
    const newImages = productForm.newCategory.images.filter((_, i) => i !== index);
    setProductForm({
      ...productForm,
      newCategory: { ...productForm.newCategory, images: newImages }
    });
  };

  const handleProductSubmit = () => {
    if (!productForm.name || !productForm.description || !productForm.price || !productForm.category) {
      alert('Please fill in all required fields');
      return;
    }
    
    if (showNewCategorySection) {
      if (!productForm.newCategory.name || !productForm.newCategory.description) {
        alert('Please fill in new category details');
        return;
      }
      const newCategory = {
        id: categories.length + 1,
        name: productForm.newCategory.name,
        description: productForm.newCategory.description,
        images: productForm.newCategory.images
      };
      setCategories([...categories, newCategory]);
      alert(`Product "${productForm.name}" added with new category "${productForm.newCategory.name}"!`);
    } else {
      alert(`Product "${productForm.name}" added to category!`);
    }
    
    setProductForm({
      name: '',
      description: '',
      price: '',
      images: [],
      category: '',
      newCategory: { name: '', description: '', images: [] }
    });
    setShowNewCategorySection(false);
  };

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #63B3ED 0%, #FF9A56 100%)',
        padding: '2rem',
        borderRadius: '20px',
        marginBottom: '3rem',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '2.5rem',
          fontWeight: 700,
          margin: 0
        }}>Admin Dashboard</h1>
        <p style={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '1.1rem',
          margin: '0.5rem 0 0 0'
        }}>Manage Categories and Products</p>
      </header>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '2rem'
      }}>
        
        {/* Add Category Section */}
        <div style={{
          background: 'white',
          padding: '2.5rem',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#333',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '3px solid #63B3ED'
          }}>Add Category</h2>

          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#333',
                fontWeight: 600,
                fontSize: '0.95rem'
              }}>Category Name *</label>
              <input
                type="text"
                name="name"
                value={categoryForm.name}
                onChange={handleCategoryChange}
                placeholder="e.g., Roman Shades"
                style={{
                  width: '100%',
                  padding: '0.9rem 1.2rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#333',
                fontWeight: 600,
                fontSize: '0.95rem'
              }}>Category Subtext *</label>
              <input
                type="text"
                name="subtext"
                value={categoryForm.subtext}
                onChange={handleCategoryChange}
                placeholder="e.g., Motorized Blinds"
                style={{
                  width: '100%',
                  padding: '0.9rem 1.2rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#333',
                fontWeight: 600,
                fontSize: '0.95rem'
              }}>Category Description *</label>
              <textarea
                name="description"
                value={categoryForm.description}
                onChange={handleCategoryChange}
                placeholder="Describe the category..."
                style={{
                  width: '100%',
                  padding: '0.9rem 1.2rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                  minHeight: '100px',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#333',
                fontWeight: 600,
                fontSize: '0.95rem'
              }}>Category Images</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleCategoryImageUpload}
                style={{ display: 'none' }}
                id="category-image-upload"
              />
              <label
                htmlFor="category-image-upload"
                style={{
                  display: 'inline-block',
                  padding: '0.9rem 2rem',
                  background: 'linear-gradient(135deg, #63B3ED 0%, #4A90E2 100%)',
                  color: 'white',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  boxShadow: '0 5px 20px rgba(99, 179, 237, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(99, 179, 237, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 5px 20px rgba(99, 179, 237, 0.3)';
                }}
              >
                📁 Upload Images
              </label>
              
              {categoryForm.images.length > 0 && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                  gap: '1rem',
                  marginTop: '1rem'
                }}>
                  {categoryForm.images.map((img, index) => (
                    <div key={index} style={{ position: 'relative' }}>
                      <img
                        src={img}
                        alt={`Category ${index + 1}`}
                        style={{
                          width: '100%',
                          height: '100px',
                          objectFit: 'cover',
                          borderRadius: '10px',
                          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <button
                        onClick={() => removeCategoryImage(index)}
                        style={{
                          position: 'absolute',
                          top: '-8px',
                          right: '-8px',
                          background: '#FF4444',
                          color: 'white',
                          border: 'none',
                          borderRadius: '50%',
                          width: '24px',
                          height: '24px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          boxShadow: '0 2px 10px rgba(255, 68, 68, 0.5)'
                        }}
                      >×</button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={handleCategorySubmit}
              style={{
                width: '100%',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #63B3ED 0%, #FF9A56 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(99, 179, 237, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 15px 40px rgba(99, 179, 237, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 30px rgba(99, 179, 237, 0.3)';
              }}
            >
              Add Category
            </button>
          </div>
        </div>

        {/* Add Product Section */}
        <div style={{
          background: 'white',
          padding: '2.5rem',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#333',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '3px solid #FF9A56'
          }}>Add Product</h2>

          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#333',
                fontWeight: 600,
                fontSize: '0.95rem'
              }}>Product Name *</label>
              <input
                type="text"
                name="name"
                value={productForm.name}
                onChange={handleProductChange}
                placeholder="e.g., Classic Roman Shade"
                style={{
                  width: '100%',
                  padding: '0.9rem 1.2rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#333',
                fontWeight: 600,
                fontSize: '0.95rem'
              }}>Product Description *</label>
              <textarea
                name="description"
                value={productForm.description}
                onChange={handleProductChange}
                placeholder="Describe the product..."
                style={{
                  width: '100%',
                  padding: '0.9rem 1.2rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                  minHeight: '80px',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#333',
                fontWeight: 600,
                fontSize: '0.95rem'
              }}>Product Price *</label>
              <input
                type="text"
                name="price"
                value={productForm.price}
                onChange={handleProductChange}
                placeholder="e.g., $150 - $300"
                style={{
                  width: '100%',
                  padding: '0.9rem 1.2rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#333',
                fontWeight: 600,
                fontSize: '0.95rem'
              }}>Product Images</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleProductImageUpload}
                style={{ display: 'none' }}
                id="product-image-upload"
              />
              <label
                htmlFor="product-image-upload"
                style={{
                  display: 'inline-block',
                  padding: '0.9rem 2rem',
                  background: 'linear-gradient(135deg, #FF9A56 0%, #FFB84D 100%)',
                  color: 'white',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  boxShadow: '0 5px 20px rgba(255, 154, 86, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(255, 154, 86, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 5px 20px rgba(255, 154, 86, 0.3)';
                }}
              >
                📁 Upload Images
              </label>
              
              {productForm.images.length > 0 && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                  gap: '1rem',
                  marginTop: '1rem'
                }}>
                  {productForm.images.map((img, index) => (
                    <div key={index} style={{ position: 'relative' }}>
                      <img
                        src={img}
                        alt={`Product ${index + 1}`}
                        style={{
                          width: '100%',
                          height: '100px',
                          objectFit: 'cover',
                          borderRadius: '10px',
                          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <button
                        onClick={() => removeProductImage(index)}
                        style={{
                          position: 'absolute',
                          top: '-8px',
                          right: '-8px',
                          background: '#FF4444',
                          color: 'white',
                          border: 'none',
                          borderRadius: '50%',
                          width: '24px',
                          height: '24px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          boxShadow: '0 2px 10px rgba(255, 68, 68, 0.5)'
                        }}
                      >×</button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#333',
                fontWeight: 600,
                fontSize: '0.95rem'
              }}>Product Category *</label>
              <select
                name="category"
                value={productForm.category}
                onChange={handleProductChange}
                style={{
                  width: '100%',
                  padding: '0.9rem 1.2rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                  cursor: 'pointer'
                }}
              >
                <option value="">Select a category</option>
                {categories.map(cat => (
                  <option key={cat.categoryId} value={cat.categoryId}>{cat.categoryName}</option>
                ))}
                <option value="new">+ New Category</option>
              </select>
            </div>

            {/* New Category Section (Conditional) */}
            {showNewCategorySection && (
              <div style={{
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                padding: '1.5rem',
                borderRadius: '15px',
                marginBottom: '1.5rem',
                border: '2px dashed #63B3ED'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  ✨ New Category Details
                </h3>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#333',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>Category Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={productForm.newCategory.name}
                    onChange={handleNewCategoryChange}
                    placeholder="e.g., Smart Blinds"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#333',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>Category Description *</label>
                  <textarea
                    name="description"
                    value={productForm.newCategory.description}
                    onChange={handleNewCategoryChange}
                    placeholder="Describe the new category..."
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      minHeight: '80px',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#333',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>Category Images</label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleNewCategoryImageUpload}
                    style={{ display: 'none' }}
                    id="new-category-image-upload"
                  />
                  <label
                    htmlFor="new-category-image-upload"
                    style={{
                      display: 'inline-block',
                      padding: '0.8rem 1.5rem',
                      background: 'linear-gradient(135deg, #63B3ED 0%, #4A90E2 100%)',
                      color: 'white',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      boxShadow: '0 3px 15px rgba(99, 179, 237, 0.3)'
                    }}
                  >
                    📁 Upload Images
                  </label>
                  
                  {productForm.newCategory.images.length > 0 && (
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                      gap: '0.8rem',
                      marginTop: '1rem'
                    }}>
                      {productForm.newCategory.images.map((img, index) => (
                        <div key={index} style={{ position: 'relative' }}>
                          <img
                            src={img}
                            alt={`New Category ${index + 1}`}
                            style={{
                              width: '100%',
                              height: '80px',
                              objectFit: 'cover',
                              borderRadius: '8px',
                              boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)'
                            }}
                          />
                          <button
                            onClick={() => removeNewCategoryImage(index)}
                            style={{
                              position: 'absolute',
                              top: '-6px',
                              right: '-6px',
                              background: '#FF4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '50%',
                              width: '20px',
                              height: '20px',
                              cursor: 'pointer',
                              fontSize: '12px',
                              fontWeight: 'bold'
                            }}
                          >×</button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            <button
              onClick={handleProductSubmit}
              style={{
                width: '100%',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #FF9A56 0%, #FFB84D 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(255, 154, 86, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 15px 40px rgba(255, 154, 86, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 30px rgba(255, 154, 86, 0.3)';
              }}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>

      {/* Categories List */}
      <div style={{
        maxWidth: '1400px',
        margin: '3rem auto 0',
        background: 'white',
        padding: '2.5rem',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#333',
          marginBottom: '2rem'
        }}>Current Categories ({categories.length})</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {categories.map(cat => (
            <div key={cat.categoryId} style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
              borderRadius: '15px',
              border: '2px solid #e2e8f0',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#333',
                marginBottom: '0.5rem'
              }}>{cat.categoryName}</h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: 1.5
              }}>{cat.categorySubText}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: #63B3ED !important;
          box-shadow: 0 0 0 3px rgba(99, 179, 237, 0.1) !important;
        }
        
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;