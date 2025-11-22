const ExpenceSchema = require ("../models/expenceModel");

exports.addExpence = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  


  const income = ExpenceSchema({
    title,
    amount,
    category,
    description,
    date
  })
  try {

    console.log("inside try");
    
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "all feilds are required" });
    }
    if (!amount === "number" || amount <= 0) {
      return res.status(400).json({ message: "Enter correct amount" });
    }
    await income.save();
    res.status(200).json({ message: "Expence added" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
  console.log(income);
  
}

exports.getExpence = async (req,res)=>{
    try{
        const incomes = await ExpenceSchema.find().sort({createAt:-1})
        res.status(200).json(incomes)
    } catch(error){
        res.status(500).json({ message: "server error" });
    }
}


exports.deleteExpence = async (req,res)=>{
    const {id} = req.params;
    ExpenceSchema.findOneAndDelete(id)
    .then((income) => {
        res.status(200).json({message:'Expence Deleted '})
    })
    .catch((err) => {
        res.status(500).json({message:'Server Error '})
    })
}
