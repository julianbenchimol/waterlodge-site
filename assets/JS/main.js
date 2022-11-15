function Model (name, price, length, height, heightWater, draft){
    this.modelName = name;
    this.price = price;
    this.length = length;
    this.height = height;
    this.heightWater = heightWater;
    this.draft = draft;
}

var modernModelButton = $('#modern-model-button');
var apartmentModelButton = $('#apartment-model-button');
var learnMoreButtons = $('[id = "learn-more"]');

modernModelButton.on('click', function(){
    document.location = './modern-models.html';
});
apartmentModelButton.on('click', function(){
    document.location = './apartment-models.html';
});

learnMoreButtons.on('click', function(event){
    const model = event.target.getAttribute('data-model');
    console.log(model);
})