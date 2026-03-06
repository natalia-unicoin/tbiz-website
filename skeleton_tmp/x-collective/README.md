This is a [Next.js](https://nextjs.org/) project of a promo program unicoin

## Getting Started

Before starting the project, create an .env file based on .env.example and fill in the appropriate values

```bash
cp .env.example .env
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Code Style

The project code is written according to the style adopted by the development team.

In cases of importing more than 2 elements from a package, destructuring an object with more than 2 properties, or applying more than 2 props to a tag or component - all elements are wrapped on a new line.

**The code below is written with empty spaces in between!**

File imports order:

```bash
# All npm-packages imports starting with 'react' and 'next' packages
import { type FC, memo } from 'react';
import dynamic from 'next/dynamic';
import NextImage from 'next/image';
import some-func or SomeComponent from 'some-npm-package';

# All @mui imports starts with types and utils
import ... from '@mui/...';

# Project global constants imports
import { ... } from 'constants/app';

# Project global types imports
import { ... } from 'types';

# Project global hooks imports
import { ... } from 'hooks';

# Project store imports
import { useStoreon } from 'store';

# Project global utils imports
import { ... } from 'utils';

# Project global styles imports
import { ... } from 'styles';

# Project global components imports
import { ... } from 'components/_controls';
import { ... } from 'components/_forms';

# Component local constants imports
import { ... } from './Component.constants';

# Component local components imports
import { ... } from './components';

# Component local styles imports
import { ... } from './Component.styles';
```

Component hooks order:

```bash
useStyles()
useRouter()
useStoreon()
useTranslation()
useRef()
useState()
useEffect()
useMemo()
useCallback()
```

// **NOTE:** If any useMemo value or any useCallback function is used in one of the hooks above in order, an order exception is thrown for them.

TSS style props order:

```bash
# For pseudo elements (::before and ::after)
content: '""'

# For all tags
position
inset (top/right/bottom/left)
minWidth/maxWidth
width
minHeight/maxHeight
height
margin
padding
display
grid/flex options
font options (fontFamily, fontWeight, lineHeight)
color
backgroundColor
backgroundClip
textFillColor
border
borderRadius
transform
opacity
outline
transition
cursor
zIndex
```

**IMPORTANT**: If a deviation from the rules above is found, you should discuss this deviation with the development team or correct it yourself (in case of a minor error).


## Interesting behavior

We cannot play video on the IOS without user permission, or audio need muted initial.
You can check out [Video Policies for IOS](https://webkit.org/blog/6784/new-video-policies-for-ios/)

To fix this on safari you can use this:

```bash
    try {
        await video.play(); // this is a promise
        // on the safari throw error: Method not allowed
    } catch {
        // handle error on the safari
        // e.g show play button to show the user that he need to click again
    }
```

When use gradient text, please set:

```css
    padding: 1px;
    clip-path: inset(1px);
```
to avoid gradient lines around text

Position fixed on the safari can blinking(this is bug on the Safari)
You can try use:

```css
    1. transform-style: 'preserve-3d'; // most cases that will be enough
    2. transform: 'translate3d(0, 0, 0)'; // but blinking may occur, cause already use translate
```

We have sticky elements on some sections(Rosie, FAQ)

```css
overflow: [hidden | auto]; // on the parent node will be disabled sticky functionallity
```

To fix this, you need to check the content, so that it does not get out of bounds.

Example:

```html
    <OverflowLayout>
        extra content
    </OverflowLayout>
    <div>
        some content with sticky elements
    </div>
    <OverflowLayout>
        extra content
    </OverflowLayout>
```

Gradient text with property:
```css
    -webkit-text-fill-color: transparent;
```
will not working on the Safari "inline-level" elements (span, button, a..., etc)

Example:

```css
    display: inline // not working
    display: inline-block // will work or something "block level"
```
