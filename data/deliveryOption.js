export const deliveryOptions = [
    {
        id: '1',
        deliveryDate: 1,
        deliveryTime: 90,
        priceCents: 0
    },
    {
        id: '2',
        deliveryDate: 1,
        deliveryTime: 70,
        priceCents: 7000
    },
    {
        id: '3',
        deliveryDate: 1,
        deliveryTime: 1,
        priceCents: 10000
    },

]

export function getDeliveryOption(deliveryOptionId){
    let deliveryOption;
      
      deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId){
          deliveryOption = option;
        }
      });
      return deliveryOption || deliveryOptions[0];
}