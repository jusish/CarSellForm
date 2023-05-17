import { useState } from 'react';

const CarSellForm = () => {
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    condition: 'Excellent',
    features: [],
    transmission: 'Automatic',
    priceRange: '',
    contactNumber: '',
  });
  const handlePriceRangeChange = (e) => {
    setCarData({ ...carData, priceRange: e.target.value });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      // Handle checkboxes separately
      const updatedFeatures = checked
        ? [...carData.features, value]
        : carData.features.filter((feature) => feature !== value);
      setCarData({ ...carData, features: updatedFeatures });
    } else {
      setCarData({ ...carData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(carData);
    // You can perform further actions with the submitted data here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="make" className="form-label">
          Car Make
        </label>
        <input
          type="text"
          className="form-control"
          id="make"
          name="make"
          value={carData.make}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="model" className="form-label">
          Car Model
        </label>
        <input
          type="text"
          className="form-control"
          id="model"
          name="model"
          value={carData.model}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="year" className="form-label">
          Year
        </label>
        <input
          type="date"
          className="form-control"
          id="year"
          name="year"
          value={carData.year}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="mileage" className="form-label">
          Mileage
        </label>
        <input
          type="number"
          className="form-control"
          id="mileage"
          name="mileage"
          value={carData.mileage}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Condition</label>
        <div>
          <label className="form-check-label">
            <input
              type="radio"
              className="form-check-input"
              name="condition"
              value="Excellent"
              checked={carData.condition === 'Excellent'}
              onChange={handleChange}
              required
            />
            Excellent
          </label>
        </div>
        <div>
          <label className="form-check-label">
            <input
              type="radio"
              className="form-check-input"
              name="condition"
              value="Good"
              checked={carData.condition === 'Good'}
              onChange={handleChange}
              required
            />
            Good
          </label>
        </div>
        <div>
          <label className="form-check-label">
            <input
              type="radio"
              className="form-check-input"
              name="condition"
              value="Fair"
              checked={carData.condition === 'Fair'}
              onChange={handleChange}
              required
            />
            Fair
          </label>
        </div>
        <div>
          <label className="form-check-label">
            <input
              type="radio"
              className="form-check-input"
              name="condition"
              value="Poor"
              checked={carData.condition === 'Poor'}
              onChange={handleChange}
              required
            />
            Poor
          </label>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Features</label>
        <div>
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              name="features"
              value="Air Conditioning"
              checked={carData.features.includes('Air Conditioning')}
              onChange={handleChange}
            />
            Air Conditioning
          </label>
        </div>
        <div>
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              name="features"
              value="Power Steering"
              checked={carData.features.includes('Power Steering')}
              onChange={handleChange}
            />
            Power Steering
          </label>
        </div>
        <div>
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              name="features"
              value="Power Windows"
              checked={carData.features.includes('Power Windows')}
              onChange={handleChange}
            />
            Power Windows
          </label>
        </div>
        <div>
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              name="features"
              value="ABS"
              checked={carData.features.includes('ABS')}
              onChange={handleChange}
            />
            ABS
          </label>
        </div>
        <div>
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              name="features"
              value="Navigation System"
              checked={carData.features.includes('Navigation System')}
              onChange={handleChange}
            />
            Navigation System
          </label>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="transmission" className="form-label">
          Transmission
        </label>
        <select
          className="form-select"
          id="transmission"
          name="transmission"
          value={carData.transmission}
          onChange={handleChange}
          required
        >
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="priceRange" className="form-label">
          Price Range
        </label>
        <select
          className="form-select"
          id="priceRange"
          name="priceRange"
          value={carData.priceRange}
          onChange={handlePriceRangeChange}
          required
        >
          <option value="">Select a price range</option>
          <option value="$0 - $10,000">$0 - $10,000</option>
          <option value="$10,000 - $20,000">$10,000 - $20,000</option>
          <option value="$20,000 - $30,000">$20,000 - $30,000</option>
          <option value="$30,000 - $40,000">$30,000 - $40,000</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="contactNumber" className="form-label">
          Contact Number
        </label>
        <input
          type="text"
          className="form-control"
          id="contactNumber"
          name="contactNumber"
          value={carData.contactNumber}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CarSellForm;
