document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('prediction-form');
    const resultValue = document.getElementById('result-value');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get user input
        const cropType = document.getElementById('crop-type').value;
        const timeOfGrownCrop = parseFloat(document.getElementById('time-of-grown-crop').value);
        const temperature = parseFloat(document.getElementById('temperature').value);
        const rainfall = parseFloat(document.getElementById('rainfall').value);

        // Replace this with your actual prediction logic
        const prediction = predictMaturity(cropType, timeOfGrownCrop, temperature, rainfall);

        // Display the prediction result
        resultValue.textContent = prediction;
    });

    // Replace this with your actual prediction function
    function predictMaturity(cropType, timeOfGrownCrop, temperature, rainfall) {
        if (cropType === 'kharif') {
            if (timeOfGrownCrop >= 0 && timeOfGrownCrop <= 15) {
                return 'Seeding and Germination Growth';
            } else if (timeOfGrownCrop > 15 && timeOfGrownCrop <= 45) {
                if (temperature < 30) {
                    if (rainfall < 10) {
                        return 'About to Die (Due to Drought)';
                    } else if (rainfall >= 10 && rainfall <= 45) {
                        return 'Moderate Rain';
                    } else {
                        return 'Flooded (Due to Heavy Rain)';
                    }
                } else if (temperature >= 30 && temperature < 45) {
                    if (rainfall < 15) {
                        return 'About to Die (Due to Drought)';
                    } else if (rainfall >= 15 && rainfall <= 65) {
                        return 'Moderate Rain';
                    } else {
                        return 'Flooded (Due to Heavy Rain)';
                    }
                } else {
                    return 'Crop Burnt (High Temperature)';
                }
            } else if (timeOfGrownCrop > 45 && timeOfGrownCrop <= 70) {
                return 'Forming Fruits and Seeds';
            } else if (timeOfGrownCrop > 70 && timeOfGrownCrop < 90) {
                return 'Ripening';
            } else {
                return 'Crop Dead';
            }
        } else if (cropType === 'rabi') {
            if (timeOfGrownCrop >= 0 && timeOfGrownCrop <= 15) {
                return 'Seeding and Germination Growth';
            } else if (timeOfGrownCrop > 15 && timeOfGrownCrop <= 45) {
                if (temperature < 0) {
                    return 'Crop Frozen (Low Temperature)';
                } else if (temperature >= 0 && temperature < 25) {
                    if (rainfall < 10) {
                        return 'About to Freeze (Due to Drought)';
                    } else if (rainfall >= 10 && rainfall <= 30) {
                        return 'Moderate Rain';
                    } else {
                        return 'Flooded (Due to Heavy Rain)';
                    }
                } else if (temperature >= 25 && temperature < 30) {
                    return 'Higher Temperature';
                } else {
                    if (rainfall < 5) {
                        return 'About to Die (Due to Drought)';
                    } else if (rainfall >= 5 && rainfall <= 40) {
                        return 'Moderate Rain';
                    } else {
                        return 'Flooded (Due to Heavy Rain)';
                    }
                }
            } else if (timeOfGrownCrop > 45 && timeOfGrownCrop <= 70) {
                return 'Forming Fruits and Seeds';
            } else if (timeOfGrownCrop > 70 && timeOfGrownCrop < 90) {
                return 'Ripening';
            } else {
                return 'Crop Dead';
            }
        } else if (cropType === 'zaid') {
            if (timeOfGrownCrop >= 0 && timeOfGrownCrop <= 10) {
                return 'Seeding and Germination Growth';
            } else if (timeOfGrownCrop > 10 && timeOfGrownCrop <= 20) {
                if (temperature < 25) {
                    if (rainfall < 10) {
                        return 'About to Die (Due to Drought)';
                    } else if (rainfall >= 10 && rainfall <= 45) {
                        return 'Moderate Rain';
                    } else {
                        return 'Flooded (Due to Heavy Rain)';
                    }
                } else if (temperature >= 25 && temperature <= 35) {
                    if (rainfall < 15) {
                        return 'About to Die (Due to Drought)';
                    } else if (rainfall >= 15 && rainfall <= 45) {
                        return 'Moderate Rain';
                    } else {
                        return 'Flooded (Due to Heavy Rain)';
                    }
                } else {
                    return 'Crop Burnt (High Temperature)';
                }
            } else if (timeOfGrownCrop > 20 && timeOfGrownCrop <= 35) {
                return 'Forming Fruits and Seeds';
            } else if (timeOfGrownCrop > 35 && timeOfGrownCrop < 45) {
                return 'Ripening';
            } else {
                return 'Crop Dead';
            }
        } else {
            return 'Unknown Crop Type';
        }
    }
    
});
