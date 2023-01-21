
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
    
    