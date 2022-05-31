module.exports = {
  enums: [
    {
      name: "JobCategory",
      values: [
        {
          name: "buying",
          dbName: null
        },
        {
          name: "pawn",
          dbName: null
        }
      ],
      dbName: null
    },
    {
      name: "JobTag",
      values: [
        {
          name: "car",
          dbName: null
        },
        {
          name: "extra_tip",
          dbName: null
        }
      ],
      dbName: null
    },
    {
      name: "JobState",
      values: [
        {
          name: "pending",
          dbName: null
        },
        {
          name: "in_progress",
          dbName: null
        },
        {
          name: "finished",
          dbName: null
        },
        {
          name: "canceled",
          dbName: null
        }
      ],
      dbName: null
    }
  ],
  models: [
    {
      name: "RW_DataMigration",
      dbName: null,
      fields: [
        {
          name: "version",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: true,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "name",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "startedAt",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "DateTime",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "finishedAt",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "DateTime",
          isGenerated: false,
          isUpdatedAt: false
        }
      ],
      primaryKey: null,
      uniqueFields: [],
      uniqueIndexes: [],
      isGenerated: false
    },
    {
      name: "UserInformation",
      dbName: null,
      fields: [
        {
          name: "id",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: true,
          isReadOnly: false,
          hasDefaultValue: true,
          type: "Int",
          default: {
            name: "autoincrement",
            args: []
          },
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "userAuthId",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: true,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "firstName",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "lastName",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "createdAt",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: true,
          type: "DateTime",
          default: {
            name: "now",
            args: []
          },
          isGenerated: false,
          isUpdatedAt: false
        }
      ],
      primaryKey: null,
      uniqueFields: [
        [
          "userAuthId"
        ]
      ],
      uniqueIndexes: [
        {
          name: null,
          fields: [
            "userAuthId"
          ]
        }
      ],
      isGenerated: false
    },
    {
      name: "UserAddress",
      dbName: null,
      fields: [
        {
          name: "id",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: true,
          isReadOnly: false,
          hasDefaultValue: true,
          type: "Int",
          default: {
            name: "autoincrement",
            args: []
          },
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "town",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "street",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "number",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "zipCode",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "userAuthId",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        }
      ],
      primaryKey: null,
      uniqueFields: [],
      uniqueIndexes: [],
      isGenerated: false
    },
    {
      name: "Job",
      dbName: null,
      fields: [
        {
          name: "id",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: true,
          isReadOnly: false,
          hasDefaultValue: true,
          type: "Int",
          default: {
            name: "autoincrement",
            args: []
          },
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "createdAt",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: true,
          type: "DateTime",
          default: {
            name: "now",
            args: []
          },
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "title",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "description",
          kind: "scalar",
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "price",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "Int",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "longitude",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "latitude",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "threeWords",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "status",
          kind: "enum",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "JobState",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "timeout",
          kind: "scalar",
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "DateTime",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "additionalAddressInformation",
          kind: "scalar",
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "categories",
          kind: "enum",
          isList: true,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "JobCategory",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "tags",
          kind: "enum",
          isList: true,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "JobTag",
          isGenerated: false,
          isUpdatedAt: false
        }
      ],
      primaryKey: null,
      uniqueFields: [],
      uniqueIndexes: [],
      isGenerated: false
    },
    {
      name: "JobUser",
      dbName: null,
      fields: [
        {
          name: "id",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: true,
          isReadOnly: false,
          hasDefaultValue: true,
          type: "Int",
          default: {
            name: "autoincrement",
            args: []
          },
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "jobId",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "Int",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "userId",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        }
      ],
      primaryKey: null,
      uniqueFields: [],
      uniqueIndexes: [],
      isGenerated: false
    },
    {
      name: "JobUserPick",
      dbName: null,
      fields: [
        {
          name: "id",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: true,
          isReadOnly: false,
          hasDefaultValue: true,
          type: "Int",
          default: {
            name: "autoincrement",
            args: []
          },
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "jobId",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "Int",
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "userId",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          hasDefaultValue: false,
          type: "String",
          isGenerated: false,
          isUpdatedAt: false
        }
      ],
      primaryKey: null,
      uniqueFields: [],
      uniqueIndexes: [],
      isGenerated: false
    }
  ],
  types: []
};
