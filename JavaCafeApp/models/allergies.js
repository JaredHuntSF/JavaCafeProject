class AllergyList //Allergy list for a given user
{
    constructor(userId, milk, eggs, peanuts, soy, wheat, treeNuts, fish, shellfish, sesame) 
    {
        this.userId = userId;
        this.milk = milk;
        this.eggs = eggs;
        this.peanuts = peanuts;
        this.soy = soy;
        this.wheat = wheat;
        this.treeNuts = treeNuts;
        this.fish = fish;
        this.shellfish = shellfish;
        this.sesame = sesame;

    }
}

export default AllergyList;