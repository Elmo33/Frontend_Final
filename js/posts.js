fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < 10; i++) {
            let post = document.createElement("div")
            post.className = "dashboard-button"
            let title = document.createElement("h2")
            title.className = "dashboard-icon"
            title.textContent = data[i]["title"]
            let content = document.createElement("span")
            content.textContent = data[i]["body"]
            post.appendChild(title)
            post.appendChild(content)
            document.getElementById("post-container").appendChild(post)
        }
        // let table = document.getElementById("display_table")
        // let titles = document.createElement("tr")
        // let title_names = ["id", "name", "year", "color", "pantone_value"]
        // for (let i = 0; i < title_names.length; i++) {
        //     let title = document.createElement("th")
        //     title.textContent = title_names[i]
        //     titles.appendChild(title)
        // }
        // table.appendChild(titles)
        // for (let i = 0; i < res.data.length; i++) {
        //     let row = document.createElement("tr")
        //     for (let j = 0; j < title_names.length; j++) {
        //         let field = document.createElement("td")
        //         field.textContent = res.data[i][title_names[j]]
        //         row.appendChild(field)
        //     }
        //     table.appendChild(row)
        // }
    })
    .catch(err => {
        let number = document.createElement("h1")
        number.textContent = "404"
        let error_text = document.createElement("h5")
        error_text.textContent = "Page Not Found"
        console.log(err.message)
        //
        // let main = document.getElementById("main")
        // main.appendChild(number)
        // main.appendChild(error_text)
    });
