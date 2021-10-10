
config = {}
with open("config.txt","r") as f:
    config_file = f.read()

for line in config_file.split("\n"):
    line_data = line.split("=")
    config[line_data[0]] = line_data[1]

print(config)

# formating index html
with open("index.html","r") as f:
    result = ""
    index_content = f.read()
    for line in index_content.split("\n"):
        if "<title>" in line:
            result+=f"<title>{config['title']}</title>\n"
        if '<meta name="description"' in line:
            result+=f'<meta name="description" content="{config["description"]}" />\n'
        else:
            result+=line+"\n"

with open("index.html","w") as f:
    f.write(result)

#######################

# formating main chunk js
with open("static/js/main.chunk.js","r") as f:
    result = ""
    main_chunk_content = f.read()
    for line in main_chunk_content.split("\n"):
        if "Y = new v.PublicKey" in line:
            result+=f'Y = new v.PublicKey("{config["address"]}"),\n'
        if 'children: [Object(B.jsx)("h1"' in line:
            result+='children: [Object(B.jsx)("h1", {'+f'children: "{config["h1"]}"\n'
        else:
            result+=line+"\n"

with open("static/js/main.chunk.js","w") as f:
    f.write(result)

"""
# formating chunk js
with open("static/js/chunk.js","r") as f:
    chunk_content = f.read()
    for line in chunk_content.split("\n"):
        pass
#####################
"""