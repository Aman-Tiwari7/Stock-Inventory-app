import Stock from "../Models/stockModel.js";

export const updateStock = async (req,res,next)=>{
    try {
        const data = req.body;
        const filter = { Item: data.values.Item};

        let doc = await Stock.findOneAndUpdate(filter, data.values,{
            new: true
          });
        // console.log("doc",doc);
        // console.log("data",data);
        if(doc.Quantity===data.values.Quantity && doc.Unit===data.values.Unit && doc.Packaging===data.values.Packaging)
        {
            res.json({status:true, message:"Item updated successfully"});
        }
        else{
            res.json({status:false,message:"There was an error updating the item"});
        }

    } catch (err) {
        next(err);
    }
};

export const createStock = async (req,res,next) =>{
    try {
        const data=req.body;
        let doc = await Stock.create(data.values);
        if(doc)
        {
            res.json({status:true, doc});
        }
        else{
            res.json({status:false,message:"Error creating item"});
        }
    } 
    catch (error) {
        next(error);
    }
};

export const deleteStock = async (req,res,next)=>{
    try {
        const data=req.body;
        // console.log(data);
        let inter = await Stock.findOne({ Item: data.Item});
        // console.log(inter);
        let doc = await Stock.findByIdAndDelete(inter._id);
        // console.log(doc);
        if(doc)
        {
            res.json({status:true,message:"Deleted successfully"});
        }
        else{
            res.json({status:false,message:"Error deleting item"});
        }
    } catch (err) {
        next(err);
    }
}

export const getAll = async (req,res,next)=>{
    try {
        const stocks = await Stock.find();
        res.json(stocks);
    } catch (error) {
        next(error);
    }
}