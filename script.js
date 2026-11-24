
// ============================================
// 1. DECLARE PRODUCT VARIABLES
// ============================================

const productName = "Samsung Galaxy Smartphone";

const basePrice = 45000;

const discountPercent = 10;

const taxRate = 18;

const stockStatus = "in_stock";


// ============================================
// 2. CALCULATE DISCOUNTED PRICE
// ============================================

function calculateDiscountedPrice(price, discount) {

    const discountAmount = (price * discount) / 100;

    const discountedPrice = price - discountAmount;

    return discountedPrice;

}


// ============================================
// 3. CALCULATE TAX
// ============================================

function calculateTax(price, taxRate) {

    const taxAmount = (price * taxRate) / 100;

    return taxAmount;

}


// ============================================
// 4. CALCULATE FINAL PRICE
// ============================================

function calculateFinalPrice(price, discount, taxRate) {

    // First calculate discounted price
    const discountedPrice =
        calculateDiscountedPrice(price, discount);

    // Calculate tax on discounted price
    const taxAmount =
        calculateTax(discountedPrice, taxRate);

    // Add tax to discounted price
    const finalPrice = discountedPrice + taxAmount;

    return finalPrice;

}


// ============================================
// 5. CHECK FREE SHIPPING
// ============================================

function isFreeShipping(finalPrice) {

    if (finalPrice >= 500) {

        return "Free Shipping";

    } else {

        return "Shipping: Rs.49";

    }

}


// ============================================
// 6. CHECK PRODUCT STOCK STATUS
// ============================================

function getStockMessage(status) {

    switch (status) {

        case "in_stock":

            return "In Stock";

        case "limited":

            return "Limited Stock";

        case "out_of_stock":

            return "Out of Stock";

        default:

            return "Invalid Stock Status";

    }

}


// ============================================
// 7. CALL ALL REQUIRED FUNCTIONS
// ============================================

// Calculate discounted price
const discountedPrice =
    calculateDiscountedPrice(basePrice, discountPercent);

// Calculate discount amount
const discountAmount =
    basePrice - discountedPrice;

// Calculate tax amount on discounted price
const taxAmount =
    calculateTax(discountedPrice, taxRate);

// Calculate final price
const finalPrice =
    calculateFinalPrice(
        basePrice,
        discountPercent,
        taxRate
    );

// Calculate shipping status
const shippingStatus =
    isFreeShipping(finalPrice);

// Get stock availability message
const stockMessage =
    getStockMessage(stockStatus);


// ============================================
// 8. PRINT COMPLETE PRODUCT PRICE SUMMARY
// ============================================

console.log("======================================");

console.log("       PRODUCT PRICE SUMMARY");

console.log("======================================");

console.log("Product Name:", productName);

console.log("Base Price: Rs.", basePrice);

console.log("Discount Percentage:", discountPercent + "%");

console.log("Discount Amount: Rs.", discountAmount);

console.log("Discounted Price: Rs.", discountedPrice);

console.log("Tax Rate:", taxRate + "%");

console.log("Tax Amount: Rs.", taxAmount);

console.log("Final Price: Rs.", finalPrice);

console.log("Shipping Status:", shippingStatus);

console.log("Stock Availability:", stockMessage);

console.log("======================================");

console.log("          END OF SUMMARY");

console.log("======================================");
