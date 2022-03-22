const ui = new UI();

class Btn {
    constructor() {
        this.containerBtn = document.querySelector(".containerBtn");
        // this.output = document.querySelector(".output");
    }
    filterBtn(products) {
        const categories = products.reduce(
            function (values, item) {
                if (!values.includes(item.category)) {
                    values.push(item.category);
                }
                return values;
            },
            ['all']
        );

        const categoriesBtn = categories.map(function (el) {
            return `
                <button class="btn" data-category="${el}">${el}</button>
            `;
        }).join("");

        this.containerBtn.innerHTML = categoriesBtn;
        const getBtnClass = document.querySelectorAll(".btn");

        getBtnClass.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                const productFilterCategory = products.filter((item) => {
                    if (item.category === category) {
                        return item;
                    }
                });
                if (category === "all") {
                    console.log(category)
                    ui.showProfile(products)
                } else {
                    console.log(category)
                    ui.showProfile(productFilterCategory)
                }
            });
        });
        ui.showProfile(products);
    }
}