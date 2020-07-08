function configloader(configfile) {
    for (var oneconfigline of configfile) {
        if (oneconfigline[0] == 'gameintrostatement') {
            //console.log(gamebeginning)
            gamebeginning[0].introstatement = oneconfigline[1]
        }
        if (oneconfigline[0] == 'gameintrochallenge') {
            //console.log(gamebeginning)
            gamebeginning[0].introchallenge = oneconfigline[1]
        }
    }
}