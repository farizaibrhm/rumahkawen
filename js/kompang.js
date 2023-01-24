function calculateKompangCost()
{
  let unit_price={
    kompang: 500
  };
  let item_price={}
  
  item_price.kompang = ($("#qty_kompang").val() * unit_price.kompang)
  $("#price_kompang").val(item_price.kompang);
  
  let total = item_price.kompang;

 
  $("#total_valueKompang").text(total);

  return total;

}
$(function()
 {
    $(".qty").on("change keyup",calculateKompangCost)
})

