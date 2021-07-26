'use strict';

const ticketCommentBtn = document.querySelector('.ticket__note-btn');
const commentBlock = document.querySelector('.comment');
const cancelCommentBtn = document.querySelector('.comment__cancel-icon');
const saveCommentBtn = document.querySelector('.comment__save-icon');
const commentArea = document.querySelector('.comment__comment-area');

document.addEventListener(`mouseover`, (evt) => {
    if (evt.target === ticketCommentBtn) {
        commentBlock.classList.add('comment--foreshadow');
    } else {
        commentBlock.classList.remove('comment--foreshadow');
    }
})
ticketCommentBtn.addEventListener(`click`, () => {
    commentBlock.classList.toggle('comment--active');
})

cancelCommentBtn.addEventListener(`click`, () => {
    commentBlock.classList.remove('comment--active');
    commentArea.value = '';
})
saveCommentBtn.addEventListener(`click`, () => {
    commentBlock.classList.remove('comment--active');
})