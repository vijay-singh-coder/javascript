const owner = {
    name: "Emma",
    speak: function () {
        let innnerFunc = () => {
            console.log(this.name);
        }
        innnerFunc()
    }
};

owner.speak();




