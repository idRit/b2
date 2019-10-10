# pishorikhuzaima@gmail.com
import time
from LD import levenshtein_ratio_and_distance


def movies_func(input_guess):
    list_of_dialogues = [
        "",
        ""
    ]

    list_of_movies = [
        "The Avengers",
        "Pulp Fiction"
    ]

    # first = time.time()
    # input_guess = input('enter movie\n')
    # second = time.time() - first

    accuracies = []

    for i in list_of_movies:
        accuracies.append(levenshtein_ratio_and_distance(i, input_guess, ratio_calc=True))

    flag = False

    for i in accuracies:
        if i > 0.4:
            # print(second)
            # return(second)
            flag = True
            return i

    if not flag:
        print("nope")
        return "nope"
