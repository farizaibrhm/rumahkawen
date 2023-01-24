
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
    
          return total;
          
        }
        
        $(function()
         {
            $(".qty").on("change keyup",calculateTotalWeddingDress)
        })
    
        
		function calculateTotalPhotography()
        {
          let unit_price={
            bp: 5500,
            sp: 6500,
            gp: 8500
          };
          let item_price={}
          
          item_price.bp = ($("#qty_bp").val() * unit_price.bp )
          $("#price_bp").val(item_price.bp);
          
          item_price.sp = ($("#qty_sp").val() * unit_price.sp )
          $("#price_sp").val(item_price.sp);
          
          item_price.gp = ($("#qty_gp").val() * unit_price.gp)
          $("#price_gp").val(item_price.gp);  
            
          
          let total = item_price.bp + item_price.sp + item_price.gp ;
        
         
          $("#total_value").text(total);
        
          return total;
          
        }
        
        $(function()
         {
            $(".qty").on("change keyup",calculateTotalPhotography)
        })

        function calculateVenueCost()
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
            
          
          let total = item_price.rb + item_price.gb + item_price.garb ;
        
         
          $("#total_valueVenue").text(total);
        
          return total;
          
        }
        
        $(function()
         {
            $(".qty").on("change keyup",calculateVenueCost)
        })


        function calculateVidCost() {

            var vidtotalCost = 0;
            var classictheme = document.getElementById("classictheme");
            var moderntheme = document.getElementById("moderntheme");
            var classicQuantity = document.getElementById("classic-qty").value;
            var modernQuantity = document.getElementById("modern-qty").value;
    
            if (classictheme.checked) {
                vidtotalCost = 1500 * classicQuantity;
            }
            if (moderntheme.checked) {
                vidtotalCost = 2000 * modernQuantity;
            }
            document.getElementById("total-vid-cost").innerHTML = "RM" + vidtotalCost;
    
            return vidtotalCost;
    
        }

  
        