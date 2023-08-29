import constants

def get_English(lang_array, key):
    if lang_array == []:
        return None
    val = constants.EMPTY_STRING
    for iter in lang_array:
        if iter[constants.LANGUAGE][constants.NAME] == constants.EN and len(iter[key]) > len(val):
            val = iter[key]
    return val