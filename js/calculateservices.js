        // Wedding Venue
        
        function calculateTotalWeddingVenue()
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
            
          
          let totalWeddingVenue = item_price.rb + item_price.gb + item_price.garb ;
        
         
          $("#total_valueWeddingVenue").text(totalWeddingVenue);
        
          return totalWeddingVenue;
          
        }
        
        $(function()
         {
            $(".qty").on("change keyup",calculateTotalWeddingVenue)
        })

    
    
    function calculateTotalWeddingDress()
        {
          let unit_price={
            wd: 1500
          };
          let item_price={}
          
          item_price.wd = ($("#qty_wd").val() * unit_price.wd )
          $("#price_wd").val(item_price.wd);
            
          
          let totalWeddingDress = item_price.wd;
        
          $("#total_valueWeddingDress").text(totalWeddingDress);
    
          return totalWeddingDress;
          
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
            
          
          let totalPhotography = item_price.bp + item_price.sp + item_price.gp ;
        
         
          $("#total_valuePhotography").text(totalPhotography);
        
          return totalPhotography;
          
        }
        
        $(function()
         {
            $(".qty").on("change keyup",calculateTotalPhotography)
        })

        
        function calculateTotalVideography()
        {
          let unit_price={
            cv: 1500,
            mv: 2000
          };
          let item_price={}
          
          item_price.cv = ($("#qty_cv").val() * unit_price.cv )
          $("#price_cv").val(item_price.cv);
          
          item_price.mv = ($("#qty_mv").val() * unit_price.mv )
          $("#price_mv").val(item_price.mv);
          
            
          
          let totalVideography = item_price.cv + item_price.mv ;
        
         
          $("#total_valueVideography").text(totalVideography);
        
          return totalVideography;
          
        }
        
        $(function()
         {
            $(".qty").on("change keyup",calculateTotalVideography)
        })
  
        function calculateKompangCost()
        {
          {
            let unit_price={
              kompang: 500
            };
            let item_price={}
            
            item_price.kompang = ($("#qty_kompang").val() * unit_price.kompang)
            $("#price_kompang").val(item_price.kompang);
            
            let totalKompang = item_price.kompang;
          
           
            $("#total_valueKompang").text(totalKompang);
          
            return totalKompang;
          
          }
        }
          $(function()
           {
              $(".qty").on("change keyup",calculateKompangCost)
          })

          function calculateTotalEmcee()
          {
            let unit_price={
              hs: 1500,
              rr: 700,
              mm: 1100
            };
            let item_price={}
            
            item_price.hs = ($("#qty_hs").val() * unit_price.hs )
            $("#price_hs").val(item_price.hs);
            
            item_price.rr = ($("#qty_rr").val() * unit_price.rr )
            $("#price_rr").val(item_price.rr);
            
            item_price.mm = ($("#qty_mm").val() * unit_price.mm)
            $("#price_mm").val(item_price.mm);  
              
            
            let totalEmcee = item_price.hs + item_price.rr + item_price.mm;
          
           
            $("#total_valueEmcee").text(totalEmcee);
          
            return totalEmcee;
            
          }
          
          $(function()
           {
              $(".qty").on("change keyup",calculateTotalEmcee)
          })

          
          function calculateTotalCost()
          {
            
            let totalCost = calculateTotalWeddingVenue() + calculateTotalPhotography() + calculateKompangCost() +calculateTotalEmcee() +calculateTotalWeddingDress() + calculateTotalVideography();
          
           
            $("#total_valueCost").text(totalCost);
          
            return totalCost;
            
          }
          
          $(function()
           {
              $(".qty").on("change keyup",calculateTotalCost)
          })
  

  

