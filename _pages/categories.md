# Overview

Everything in this directory creates or operates on COCO Camera Traps databases, which are .json files structured as...

## COCO Camera Traps format

```
{
  "info" : info,
  "images" : [image],
  "categories" : [category],
  "annotations" : [annotation]
}

info 
{
  # Required
  "version" : str,
  "description" : str,
  
  # Optional
  "year" : int,
  "contributor" : str
  "date_created" : datetime
}

image
{
  # Required
  "id" : str,
  "file_name" : str,
  
  # Optional
  "width" : int,
  "height" : int,
  "rights_holder" : str,    
  "datetime": datetime,  
  "seq_id": str,
  "seq_num_frames": int,
  "frame_num": int,
  "location": str,
  "corrupt": bool
}

category
{
  "id" : int,
  "name" : str  
}

annotation
{
  "id" : str,
  "image_id" : str,  
  "category_id" : int,
  "bbox": [x,y,width,height],
  "sequence_level_annotation" : bool,
  "track_id",
}
```

`seq_num_frames` is the total number of frames in the sequence that this image belongs to.

`frame_num` specifies this frame's order in the sequence.

Note that the coordinates in the `bbox` field are absolute here, different from those in the [batch processing API](api/batch_processing/README.md) output, which are relative.

Fields listed as "optional" are intended to standardize commonly-used parameters (such as date/time information).  When present, fields should follow the above conventions.  Additional fields may be present for specific data sets.

Whenever possible, the category ID 0 is associated with a class called "empty", even if there are no empty images in a data set.  When preparing data sets, we normalize all versions of "empty" (such as "none", "Empty", "no animal", etc.) to "empty".

# Contents

This directory is organized into the following subdirectories...

## annotations
Code for creating new bounding box annotation tasks and converting annotations to COCO Camera Traps format.

## databases
Miscellaneous tools for manipulating COCO Camera Traps .json files.  Of particular note is `sanity_check_json_db.py`, which validates that a CCT database is well-formatted, optionally checking image existence and size.

**databases/classifcation**: Scripts for creating and analyzing a dataset for classification specifically.

## importers
Code for converting frequently-used metadata formats (or sometimes one-off data sets) to COCO Camera Traps .json files.

## megadb
Code for querying and updating MegaDB.

## tfrecords
Code for generating tfrecords from COCO Camera Traps .json files.  This directory is based on the [Visipedia tfrecords repo](https://github.com/visipedia/tfrecords).
