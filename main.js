const linkSocialMedia = {
  github: 'kleberdacostamt',
  youtube: 'jakelinygracielly',
  facebook: 'maykbrito',
  instagram: 'jakeliny.gracielly',
  twitter: 'jakelinytec'
}

function changeSocialMediaLink() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`
  }
}

changeSocialMediaLink()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linkSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      userLink.href = data.html_url
      avatar.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
