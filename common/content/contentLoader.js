let contentOuterContainer = document.querySelector('#content-place');
contentOuterContainer.classList.add('content_outer', 'outerContainer', 'blocksMargin', 'contentBackground');
let contentInnercontainer = contentOuterContainer.querySelector('div:first-child');
contentInnercontainer.classList.add('content_inner', 'innerContainer', 'max-width');