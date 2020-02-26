import youtube_dl


# only works for single videos at the moment and not embedded
# method for getting the url and title from the page the user is on
# requires url pulled from the user

def Extractor(url):
    ydl = youtube_dl.YoutubeDL({
        'outtmpl': '%(id)s%(ext)s',
        'nocheckcertificate': True
    })
    video = {'URL': '', 'Title': '', 'Thumbnail':'','Tags':[]}
    with ydl:
        result = ydl.extract_info(
            url,
            download=False,
            # We just want to extract the info
        )

    if 'tags' in result.keys():
        video['Tags'] = result['tags']
    video['URL'] = result["webpage_url"]
    video['Title'] = result["title"]
    video['Thumbnail'] = result["thumbnail"]

    return video
