
class Cart{
    constructor(){
        this.items = [];
        this.total = 0;
        this.discountLimit = 150;
    }

    addItem = (item, basePrice, multiplier) => {
        let idx = this.items.findIndex(x => x.id == item.id);

        if( idx > -1){
            this.items[idx].total += this.items[idx].price;
            this.items[idx].count += 1;
            // if(this.items[idx].count >= multiplier){
            //     var dis = basePrice + (multiplier * (this.items[idx].count%multiplier));
            //     this.items[idx].total = this.items[idx].total - dis;
            //     console.log(this.items[idx], dis)
            // }
        }
        else {
            item.count = 1;
            item.total = item.price;
            item.basePrice = basePrice;
            item.multiplier = multiplier;
            this.items.push(item);
        }
    }

    checkoutCart = () => {
        this.items.map(item => {
            if(item.count >= item.multiplier){
                var dis;
                if(item.count % item.multiplier == 0) dis = item.basePrice + (item.multiplier * ((item.count / item.multiplier) - 1));
                else {

                   dis = item.basePrice + (item.multiplier * ((item.count - (item.count % item.multiplier)/ item.multiplier) - 1));
                }

                item.total = item.total - dis;
            }
            this.total += item.total;
        });
        if(this.total > this.discountLimit) this.total = this.total - (this.total * 0.20);
        return {items: this.items, total: this.total};
    }
}

module.exports = Cart;
