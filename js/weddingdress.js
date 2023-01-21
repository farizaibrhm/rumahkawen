
		function calculateTotalWeddingDress()
        {
          let unit_price={
            wd: 1500
          };
          let item_price={}
          
          item_price.wd = ($("#qty_wd").val() * unit_price.wd )
          $("#price_wd").val(item_price.wd);
            
          
          let total = item_price.wd;
        
          $("#total_valuedress").text(total);
          
        }
        
        $(function()
         {
            $(".qty").on("change keyup",calculateTotalWeddingDress)
        })
        