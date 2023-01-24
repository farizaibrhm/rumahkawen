        
        function calculateTotalWeddingVenueCost()
        {
          let unit_price={
            rb: 4000,
            gb: 5000,
            garb: 6000
          };
          let item_price={}
          
          item_price.rb = ($("#qty_rb").val() * unit_price.rb )
          $("#price_rb").val(item_price.rb);
          
          item_price.gb = ($("#qty_gb").val() * unit_price.gb)
          $("#price_gb").val(item_price.gb);
          
          item_price.garb = ($("#qty_garb").val() * unit_price.garb)
          $("#price_garb").val(item_price.garb);  
            
          
          let totalWeddingVenueCost = item_price.rb + item_price.gb + item_price.garb ;
        
         
          $("#total_valueWeddingVenue").text(totalWeddingVenueCost);
        
          return totalWeddingVenueCost;
          
        }
        
        $(function()
         {
            $(".qty").on("change keyup",calculateTotalWeddingVenueCost)
        })
