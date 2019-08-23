```
// example from https://www.reactenlightenment.com/react-jsx/5.8.html
var mouseOverHandler = function mouseOverHandler() {
    console.log('you moused over');
  };
var clickHandler = function clickhandler() {
    console.log('you clicked');
  };
  
var reactNode = <div onClick={clickHandler} onMouseOver={mouseOverHandler} >click or mouse over</div>;

ReactDOM.render(reactNode, document.getElementById('app'));
```


|Event Type/Category:|Events:|Event Specific Properties:|
|--- |--- |--- |
|Clipboard|onCopy, onCut, onPaste|DOMDataTransfer, clipboardData|
|Composition|onCompositionEnd, onCompositionStart, onCompositionUpdate|data|
|Keyboard|onKeyDown, onKeyPress, onKeyUp|altKey, charCode, ctrlKey, getModifierState(key), key, keyCode, locale, location, metaKey, repeat, shiftKey, which|
|Focus|onChange, onInput, onSubmit|DOMEventTarget, relatedTarget|
|Form|onFocus, onBlur||
|Mouse|onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd, onDragEnter, onDragExit onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown, onMouseEnter, onMouseLeave onMouseMove, onMouseOut, onMouseOver, onMouseUp|altKey, button, buttons, clientX, clientY, ctrlKey, getModifierState(key), metaKey, pageX, pageY, DOMEventTarget relatedTarget, screenX, screenY, shiftKey,|
|Selection|onSelect||
|Touch|onTouchCancel, onTouchEnd, onTouchMove, onTouchStart|altKey DOMTouchList changedTouches, ctrlKey, getModifierState(key), metaKey, shiftKey, DOMTouchList targetTouches, DOMTouchList touches,|
|UI|onScroll|detail, DOMAbstractView view|
|Wheel|onWheel|deltaMode, deltaX, deltaY, deltaZ,|
|Media|onAbort, onCanPlay, onCanPlayThrough, onDurationChange, onEmptied, onEncrypted, onEnded, onError, onLoadedData, onLoadedMetadata, onLoadStart, onPause, onPlay, onPlaying, onProgress, onRateChange, onSeeked, onSeeking, onStalled, onSuspend, onTimeUpdate, onVolumeChange, onWaiting||
|Image|onLoad, onError||
|Animation|onAnimationStart, onAnimationEnd, onAnimationIteration|animationName, pseudoElement, elapsedTime|
|Transition|onTransitionEnd|propertyName, pseudoElement, elapsedTime|


