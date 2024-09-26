import Array "mo:base/Array";
import Time "mo:base/Time";

actor {
  stable var artists : [Artist] = [];
  stable var projects : [Project] = [];
  stable var ownershipRecords : [(Text, Project)] = [];

  public type Artist = {
    artistId : Text;
    name : Text;
    contactInfo : Text;
  };

  public type Project = {
    projectId : Text;
    title : Text;
    description : Text;
    creationDate : Time.Time;
  };

  public query func getArtists() : async [Artist] {
    return artists;
  };

  public query func getProjects() : async [Project] {
    return projects;
  };

  public func addArtist(artistId : Text, name : Text, contactInfo : Text) : async () {
    let newArtist : Artist = {
      artistId = artistId;
      name = name;
      contactInfo = contactInfo;
    };
    artists := Array.append(artists, [newArtist]);
  };

  public func addProject(projectId : Text, title : Text, description : Text) : async () {
    let newProject : Project = {
      projectId = projectId;
      title = title;
      description = description;
      creationDate = Time.now();
    };
    projects := Array.append(projects, [newProject]);
  };

  public func assignProjectToArtist(artistId : Text, projectId : Text) : async () {
    switch (Array.find<Project>(projects, func(p) { p.projectId == projectId })) {
      case (?project) {
        ownershipRecords := Array.append(ownershipRecords, [(artistId, project)]);
      };
      case (null) {
        // Optionally handle project not found
      };
    };
  };

  // Corrected version of getArtistProjects
  public query func getArtistProjects(artistId : Text) : async [Project] {
    let filteredRecords = Array.filter<(Text, Project)>(ownershipRecords, func((aId, _)) { aId == artistId });

    // Map the filtered records to extract only the project part
    return Array.map<(Text, Project), Project>(filteredRecords, func((_, project)) { project });
  };
};
