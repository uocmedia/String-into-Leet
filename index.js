// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = convertStringintoLeet("Let's have some fun.");

function convertStringintoLeet (source)
{
    let sourceArray = source.split('');
    return sourceArray.reduce((total, amount) => {
        switch (amount) {
            case 'a' || 'A':
                total.push('4');
                break;
            case 'e' || 'E':
                total.push('3');
                break;
            case 'i' || 'I':
                total.push('1');
                break;
            case 'o' || 'O':
                total.push('0');
                break;
            case 's' || 'S':
                total.push('5');
                break;
            case 't' || 'T':
                total.push('7');
                break;
            case 'b' || 'B':
                total.push('5');
                break;
            default:
                total.push(amount)
        }
        return total;
    }, []).join('');
}

