import PostMessage from '../models/postMessage.js';


export const addEmail = async (req, res) => {
    const emailBody = req.body;
    
    const newEmail = new PostMessage(emailBody);
    
    try {

        let emailExists = await PostMessage.find({email: req.body.email});
        if(emailExists && emailExists.length === 0){
            await newEmail.save();
            res.status(200).json(newEmail);
        }else{
            res.status(409).json({ message: 'Email already exists!' });
        }
        
        
    } catch (error) {
        res.status(409).json({ message: error.message });
        
    }
};