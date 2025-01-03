import React, { useState, useEffect } from 'react';
import '../utils/Assets/CSS/ArtworkForm.css';
import Header from '../Reusables/Header';
import Footer from '../Reusables/Footer';
import { convertToBase64 } from '../Reusables/ReuseableFunction';
import { saveProduct } from '../utils/services/productServices';
import { getCategories } from '../utils/services/categoryServices';

function ArtworkForm() {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    productName: '',
    productImage: '',
    startingBid: '',
    category: '',
    description: '',
    sellerID: '66fb0c6b7e970dce506f3330',
    categoryID: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError('Failed to load categories.');
      }
    };
    fetchCategories();
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await convertToBase64(file);
        setFormData((prevData) => ({
          ...prevData,
          productImage: base64
        }));
      } catch (err) {
        console.error('Error converting file to base64:', err);
        setError('Failed to upload image.');
      }
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ 
      ...prevData, 
      [name]: value 
    }));
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    const selectedCategory = categories.find(category => category.categoryName === value);
    console.log(selectedCategory)
    setFormData((prevData) => ({
      ...prevData,
      category: selectedCategory ? selectedCategory.categoryName : '',
      categoryID: selectedCategory ? selectedCategory.id : ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);



    try {
      await saveProduct(formData);
      alert('Product saved successfully!');
      setFormData({
        productName: '',
        productImage: '',
        startingBid: '',
        category: '',
        description: '',
        sellerID: '', 
        categoryID: ''
      });
    } catch (err) {
      console.error('Error saving product:', err);
      setError('Failed to save product.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Header/>
      <div className="artwork-form-container">
        <h2>Create Your Artwork Masterpiece</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="file-upload">
            <label htmlFor="file-upload" className="file-upload-label">
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                className="file-input"
                accept=".png,.jpeg,.jpg"
                required 
              />
              <div className="file-upload-box">
                <p>Choose a file or drag & drop it here</p>
                <p>Drop your files here. JPEG, PNG, JPG. Max 100mb.</p>
              </div>
            </label>
            {formData.productImage && (
              <div className="preview">
                <img src={formData.productImage} alt="Preview" style={{ maxWidth: '200px', marginTop: '10px' }} />
              </div>
            )}
          </div>

          <div className="form-section-group">
            <h3>Artwork Information</h3>
            <div className="form-group">
              <div className="form-label">
                <label htmlFor="productName">Artwork Name*</label>
                <input
                  id="productName"
                  type="text"
                  name="productName"
                  placeholder="Artwork Name"
                  value={formData.productName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-label">
                <label htmlFor="startingBid">Starting Bid*</label>
                <input
                  id="startingBid"
                  type="number"
                  name="startingBid"
                  placeholder="Starting Bid"
                  value={formData.startingBid}
                  onChange={handleInputChange}
                  required
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
            <div className="category-group">
              <label htmlFor="category">Category*</label>
              <select
                class="select"
                id="category"
                name="categoryID"
                value={formData.categoryID}
                onChange={handleCategoryChange}
                required
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </div>
            <div className="description-group">
              <label htmlFor="description">Artwork Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Artwork Description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
              ></textarea>
            </div>
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Create Item'}
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default ArtworkForm;
