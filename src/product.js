// src/products.js
const products = {
  washingMachines: [
    {
      id: "wm1",
      name: "Whirlpool Stainwash Pro 7.5 kg 5 Star Fully Automatic Top Load Washing Machine",
      price: 25990,
      image: "whirlpool-wm.jpg", // Replace with your image
      model: "whirlpool-wm.glb", // Replace with your 3D model
      description: `
          Fully Automatic Top Load Washing Machine with In-Built Heater, Express Wash, Spiro Wash Action (Black)
          <ul>
            <li>7.5 kg capacity, suitable for medium-sized families</li>
            <li>5 Star Energy Rating for efficient power consumption</li>
            <li>In-Built Heater for effective stain removal</li>
            <li>Express Wash for quick cleaning</li>
            <li>Spiro Wash Action for superior cleaning performance</li>
            <li>Color: Black</li>
          </ul>
        `,
      features: [
        "In-Built Heater",
        "Express Wash",
        "Spiro Wash Action",
        "5 Star Energy Rating",
        "7.5 kg Capacity",
      ],
      specifications: {
        capacity: "7.5 kg",
        energyRating: "5 Star",
        color: "Black",
        washType: "Fully Automatic Top Load",
        heater: "Yes",
      },
    },
    // ... other washing machines
  ],
  // ... other product categories
};

export default products;
