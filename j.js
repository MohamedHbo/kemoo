 function toggleDetails(buttonId) {
      var detailsList = document.getElementById(buttonId);
      detailsList.classList.toggle('hidden'); // Toggle the hidden class

      if (!detailsList.classList.contains('hidden')) {
        detailsList.innerHTML = ""; // يُفرغ القائمة قبل إضافة العناصر

          
         
        // المشروبات وأسعارها
        var drinks = [];

        if (buttonId === "softDrinks") {
          drinks = [
            { name: "Coca-Cola",m: "   " ,price: " USD 2.00" },
            { name: "Cola Light", price: " USD 2.00" },
             { name: "Sprite", price: " USD 2.00" },
              { name: "Fanta", price: " USD 2.00" },
          ];
        } else if (buttonId === "water") {
          drinks = [
            { name: "Still water,small", price: " USD 2.00" },
           { name: "Still water,large", price: " USD 3.00" },
           { name: "SparklingWater", price: " USD 3.00" },   
          
          ];
        } else if (buttonId === "hotDrinks") {
          drinks = [
             { name: "Espresso", price: " USD 2.00" },
               { name: "American Coffee", price: " USD 2.00" },
                { name: "Cappuccino", price: " USD 2.00" },
               { name: "Turkish coffee", price: " USD 2.00" },
               { name: "French coffee", price: " USD 2.00" },
              { name: "Tea", price: " USD 2.00" },
              { name: "Nescafe", price: " USD 2.00" },
          ];
        } else if (buttonId === "classicCocktails") {
          drinks = [
            { name: "Sex ON THE BEACH", price: " USD 7.00" },
           { name: "Tequil Sun Rise", price: " USD 7.00" },
          { name: "Cosmopolitan", price: " USD 5.00" },
              { name: "Collins", price: " USD 7.00" },
              { name: "WHISKY SOUR", price: " USD 7.00" },
              { name: "BLOODY MARY", price: " USD 7.00" },
          ];
        }
           
        else if (buttonId === "signatureMocktails") {
          drinks = [
           { name: "Breeze of life", price: " USD 4.00" },
           { name: "Coconut Splash", price: " USD 4.00" },
              { name: "Aqua Joy", price: " USD 4.00" },
              
               { name: " Jalapeno Magness", price: " USD 4.00" },
              
               { name: "Mamlouk Iced Coffee", price: " USD 4.00" },
              
                { name: "Meraki Iced Tea", price: " USD 4.00" },
              
                { name: "Sun Ray Benefits", price: " USD 4.00" },
          ];
        }
         
          else if (buttonId === "signatureCocktails") {
          drinks = [
            { name: "Sunrise Organic Garden", price: " USD 7.00" },
            { name: "Yades Iced Tea", price: " USD 7.00" },
              
              { name: "Sunrise lovers", price: " USD 7.00" },
              
              { name: "Blue Island", price: " USD 7.00" },
              
                 { name: "Bella Story", price: " USD 7.00" },
                
              { name: "Sun Rise Boulevard", price: " USD 7.00" },
              { name: "White Hills Colada", price: " USD 7.00" },
          ];
        }
          
          else if (buttonId === "energyDrink") {
          drinks = [
            { name: "Red Bull", price: " USD 6.00" },
            { name: "Red Bull sugar free", price: " USD 6.00" },
            // أضف المشروبات الباردة الأخرى هنا
          ];
        }
        
          else if (buttonId === "squeezedFruitJuice") {
          drinks = [
            { name: "Mango", price: " USD 4.00" },
            { name: "Orange", price: " USD 4.00" },
               { name: "Guava", price: " USD 4.00" },
               { name: "Strawberry", price: " USD 4.00" },
            // أضف المشروبات الباردة الأخرى هنا
          ];
        }
          
            else if (buttonId === "houseWine") {
          drinks = [
            { name: "WHITE WINE", price:  " USD 29.00" },
            { name: "ROSE WINE", price: " USD 29.00" },
              
              { name: "RED WINE", price: " USD 29.00" },
            // أضف المشروبات الباردة الأخرى هنا
          ];
        }
          
        
         // إنشاء عناصر القائمة وإضافتها للقائمة
        drinks.forEach(function(drink) {
          var listItem = document.createElement("li");
          listItem.textContent = drink.name +"  price :   " + drink.price;
          detailsList.appendChild(listItem);
        });
      }
    }