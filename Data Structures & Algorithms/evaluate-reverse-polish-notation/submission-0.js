class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (const c of tokens) {
            if (c === "+" || c === "/" || c === "*" || c === "-") {
                let b = stack.pop();
                let a = stack.pop();

                switch (c) {
                    case "+":
                        stack.push(a + b);
                        break;
                    case "-":
                        stack.push(a - b);
                        break;
                    case "/":
                        let division = a / b;
                        stack.push(division < 0 ? Math.ceil(division) : Math.floor(division));
                        break;
                    case "*":
                        stack.push(a * b);
                        break;
                }
            } else {
                stack.push(parseInt(c));
            }
        }

        return stack.pop();
    }
}
