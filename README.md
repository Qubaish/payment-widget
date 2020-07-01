# Payment Widget
<br/>

 Demo
<a href="https://boring-noyce-e5b76e.netlify.app/">Switcher Component</a>

## Installation

```bash
npm install @qubaish/payment-widget
```

```javascript
import React, {useState} from 'react';
import PaymentWidget from '@qubaish/payment-widget';

function SwitcherExample() {
    return (
        <div>
            <PaymentWidget 
                name="Business Name"
                seconds={10}
                amount="100000"
            />
        </div>
    )
}

To set up the project:

1.  Fork and clone the repository
2.  `$ npm install`
3.  `$ npm run start`