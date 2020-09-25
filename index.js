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
            case 'a':
                total.push('4');
                break;
            case 'e':
                total.push('3');
                break;
            case 'i':
                total.push('1');
                break;
            case 'o':
                total.push('0');
                break;
            case 's':
                total.push('5');
                break;
            case 't':
                total.push('7');
                break;
            case 'b':
                total.push('5');
                break;
            default:
                total.push(amount)
        }
        return total;
    }, []).join('');
}

