import uuid from 'uuid';


export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP = 'THUMB_UP';
export const THUMB_DOWN = 'THUMB_DOWN';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT'


export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
        thumbs: 0
    }
}

export function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

export function thumbUp(thumbs, id) {
	return {
		type: THUMB_UP,
		id
	}
}

export function thumbDown(thumbs, id) {
	return {
		type: THUMB_DOWN,
		id
	}
}
