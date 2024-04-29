function checkBalancedExpression(expression) {
    let stack = [];
    for(let i = 0; i< expression.length;i++) {
        let current = expression[i];
        if(current== '{' || current == '[' || current == '(')
        {
            stack.push(current);
            continue;
        }
        if(stack.length == 0)
        {
            return false;
        }
        let popchar;
        switch (current) {
            case '}':
                popchar = stack.pop();
                if(popchar == '[' || popchar == '(')
                {
                    return false;
                }
                break;
            case ']':
                popchar = stack.pop();
                if(popchar == '{' || popchar == '(')
                {
                    return false;
                }                
                break;
            case ')':
                popchar = stack.pop();
                if(popchar == '[' || popchar == '{')
                {
                    return false;
                }                
                break;
        }
    }
    if(stack.length == 0){
        return true;
    }
}
let exp = "[()]{({})}{[()()]()}";
if(checkBalancedExpression(exp))
{
    console.log("Given input string "+ exp +" is Balanced");
}
else
{
    console.log("Given input string: "+ exp +" is UnBalanced");
}
